import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";

const VerificationEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>メールアドレス確認を完了してください</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans p-5">
          <Container className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <Section className="border-b border-gray-300 pb-4 mb-4">
              <Text className="text-xl font-bold mb-4 text-gray-800 uppercase">
                確認メールの送信
              </Text>
            </Section>
            <Section className="border-b border-gray-300 pb-4 mb-4">
              <Text className="text-sm text-gray-600 leading-relaxed mb-4">
                このメールは、ログイン時にご入力いただいたメールアドレス宛に自動的にお送りしています。
              </Text>
              <Text className="text-sm text-gray-600 leading-relaxed mb-4">
                こちらのリンクをクリックして、メールアドレスの確認を完了してください。
              </Text>
            </Section>
            <Section>
              <Link
                href="https://example.com/confirm"
                className="inline-block bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600"
              >
                メールアドレスを確認する
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
