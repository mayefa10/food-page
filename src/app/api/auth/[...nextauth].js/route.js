import mongoose from 'mongoose';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/app/models/users';
const handel = NetAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',

      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'test@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });
        const passwordOk= user &&bcrypt.compareSync(password, user.password);

        if (passwordOk){
          return user;
        }
        return null;
      },
    }),
  ],
});
