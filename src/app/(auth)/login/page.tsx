'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const authKey: string = process.env.AUTH_SECRET_KEY || ''; //aes암호화 키
  const [loading, setLoading] = useState(false);

  // const {
  //   register, // value
  //   handleSubmit, //입력값 submit
  //   reset, //입력값 초기화
  //   formState: { errors }, //error msg
  // } = useForm<LoginType>({
  //   resolver: zodResolver(LoginSchema), //useForm으로 회원가입 form 관리
  // });

  // // 로그인
  // const submitLogin = async (data: LoginType) => {
  //   setLoading(true);
  //   const result = await signIn('credentials', {
  //     //next-auth 로그인 요청
  //     loginId: data.email,
  //     loginPassword: encrypt(data.password, authKey),
  //     redirect: false,
  //     // callbackUrl: '/',
  //   });

  //   if (result?.ok) {
  //     router.push('/');
  //     reset();
  //     // setLoading(false);
  //   } else {
  //     alert('아이디 혹은 비밀번호를 확인해주세요.');
  //     setLoading(false);
  //   }
  // };

  //회원가입
  const goRegister = () => {
    router.push('/register');
  };

  return (
    <>
      <div className="text-2xl text-center border-b-slate300 border-b py-3 bg-slate-200 font-bold">
        Login
      </div>
    </>
  );
}
