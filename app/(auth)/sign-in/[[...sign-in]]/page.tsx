import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: 'mx-auto',
          formButtonPrimary:
            'bg-gradient-to-br from-grad-start to-grad-end hover:from-grad-start/80 hover:to-grad-end/80',
        },
      }}
    />
  );
}
