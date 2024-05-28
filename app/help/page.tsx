// pages/help.tsx
import Head from 'next/head';
import { NextPage } from 'next';

const Help: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Help - 10k Sentence Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to <a href="https://github.com/jaroslaw-weber/10k-sentence-journey" className="link link-hover">10k Sentence Journey!</a>
        </h1>

        <p className="mt-6 text-base">
          Learn Korean effectively by reading and understanding sentences!
        </p>

        <div className="mt-8 text-left">
          <h2 className="text-lg font-semibold">How it works:</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Progress through 10,000 Korean sentences to learn words in context.</li>
            <li>Sentences use vocabulary that is selected randomly, with more frequent words showing up first.</li>
            <li>This approach lets you gradually learn more difficult words.</li>
            <li>As you learn words, click on the checkbox <i className="i-health-bookmark text-success"></i> next to them to track your progress and hide them.</li>
          </ul>
        </div>

        <div className="mt-4">
          <a href="https://langible.com/articles/10000-sentence-method"
             className="link link-primary">
            Learn more about the 10,000 Sentence Method
          </a>
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/jaroslaw-weber/10k-sentence-journey"
            className="btn btn-primary gap-2">
            <i className="i-brand-github"></i> Visit GitHub
          </a>
        </div>

        <p className="mt-6 text-secondary">
          This project is <strong>open source</strong>. You can contribute by visiting the <a href="https://github.com/jaroslaw-weber/10k-sentence-journey" className="link link-accent">GitHub repository</a>.
        </p>
      </main>

      <footer className="p-4 footer bg-base-200 text-base-content footer-center">
        <div>
          <p>Powered by <a href="https://github.com/jaroslaw-weber/10k-sentence-journey" className="link link-hover">10k Sentence Journey</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Help;
