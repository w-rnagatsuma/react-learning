"use client";

import Link from "next/link";
import { useState, type ChangeEvent } from "react";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import FormButton from "@/components/ui/FormButton";

type Step = "input" | "confirm" | "complete";

type ContactForm = {
  lastName: string;
  firstName: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = {
  lastName: "",
  firstName: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [step, setStep] = useState<Step>("input");
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>(
    {}
  );

  const updateField = (key: keyof ContactForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};

    if (!form.lastName.trim()) nextErrors.lastName = "姓を入力してください";
    if (!form.firstName.trim()) nextErrors.firstName = "名を入力してください";
    if (!form.email.trim()) {
      nextErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (!form.message.trim()) nextErrors.message = "お問い合わせ内容を入力してください";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center">問い合わせフォーム</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
          このページは学習用のサンプルです。実際の送信は行われません。
        </p>
        <nav aria-label="問い合わせフォームのステップ" className="mb-8">
          <ol className="flex items-center justify-center gap-4 text-sm">
            <li className="flex items-center gap-2">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                  step === "input"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500"
                }`}
              >
                1
              </span>
              <span className={step === "input" ? "font-semibold" : "text-gray-500"}>入力</span>
            </li>
            <li className="h-px w-8 bg-gray-200 dark:bg-gray-700" />
            <li className="flex items-center gap-2">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                  step === "confirm"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500"
                }`}
              >
                2
              </span>
              <span className={step === "confirm" ? "font-semibold" : "text-gray-500"}>確認</span>
            </li>
            <li className="h-px w-8 bg-gray-200 dark:bg-gray-700" />
            <li className="flex items-center gap-2">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                  step === "complete"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500"
                }`}
              >
                3
              </span>
              <span className={step === "complete" ? "font-semibold" : "text-gray-500"}>完了</span>
            </li>
          </ol>
        </nav>

        {step === "input" && (
          <form className="flex flex-col gap-4">
            <fieldset className="flex flex-col gap-2">
              <legend className="text-sm font-medium">お名前</legend>
              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  type="text"
                  placeholder="姓（山田）"
                  value={form.lastName}
                  onChange={updateField("lastName")}
                  className={errors.lastName ? "border-red-500" : undefined}
                />
                <FormInput
                  type="text"
                  placeholder="名（太郎）"
                  value={form.firstName}
                  onChange={updateField("firstName")}
                  className={errors.firstName ? "border-red-500" : undefined}
                />
              </div>
              {(errors.lastName || errors.firstName) && (
                <p className="text-sm text-red-600">
                  {errors.lastName || errors.firstName}
                </p>
              )}
            </fieldset>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">メールアドレス</span>
              <FormInput
                type="email"
                placeholder="example@example.com"
                value={form.email}
                onChange={updateField("email")}
                className={errors.email ? "border-red-500" : undefined}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">お問い合わせ内容</span>
              <FormTextarea
                placeholder="内容を入力してください"
                value={form.message}
                onChange={updateField("message")}
                className={errors.message ? "border-red-500" : undefined}
              />
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message}</p>
              )}
            </label>
            <FormButton
              onClick={() => {
                if (validate()) setStep("confirm");
              }}
            >
              確認へ
            </FormButton>
          </form>
        )}

        {step === "confirm" && (
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <h2 className="text-lg font-semibold mb-4">入力内容の確認</h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">お名前</dt>
                  <dd className="mt-1 text-base">
                    {form.lastName} {form.firstName}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">メールアドレス</dt>
                  <dd className="mt-1 text-base">{form.email || "-"}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">お問い合わせ内容</dt>
                  <dd className="mt-1 text-base whitespace-pre-wrap">
                    {form.message || "-"}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep("input")}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                戻る
              </button>
              <FormButton onClick={() => setStep("complete")}>送信</FormButton>
            </div>
          </div>
        )}

        {step === "complete" && (
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">送信完了</h2>
              <p className="text-gray-600 dark:text-gray-400">
                学習用のため実際の送信は行われません。
              </p>
            </div>
            <FormButton
              onClick={() => {
                setForm(initialForm);
                setStep("input");
              }}
            >
              入力画面へ戻る
            </FormButton>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              トップページに戻る
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
