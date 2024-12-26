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

const AccountCreationEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>アカウント作成を完了してください</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans p-5">
          <Container className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <Section className="border-b border-gray-300 pb-4 mb-4">
              <Text className="text-xl font-bold mb-4 text-gray-800 uppercase">
                アカウント作成のご案内
              </Text>
            </Section>
            <Section className="border-b border-gray-300 pb-4 mb-4">
              <Text className="text-sm text-gray-600 leading-relaxed mb-4">
                このメールは、仮登録いただいたメールアドレス宛に自動的に送信されています。
              </Text>
              <Text className="text-sm text-gray-600 leading-relaxed mb-4">
                以下のリンクをクリックして、アカウント作成を完了してください。リンクの有効期限は24時間です。
              </Text>
            </Section>
            <Section>
              <Link
                href="https://example.com/create-account"
                className="inline-block bg-green-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-600"
              >
                アカウントを作成する
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AccountCreationEmail;
