import Head from "next/head"

type Props = {}

export default function Cadastro({ }: Props) {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Loja virtual de artigos esportivos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-slate-300 to-slate-500 flex flex-col justify-center w-screen h-screen">
        <div className="mx-auto w-full max-w-lg rounded-lg bg-slate-200 xs-p-0 shadow-lg mt-10 divide-y divide-slate-400">
          <div className="py-4">
            <h1 className="text-2xl font-bold text-center">LOGOTIPO</h1>
            <h3 className="text-lg font-semibold text-center mt-2">Nome da Empresa</h3>
          </div>
          <form className="py-4 px-10 flex flex-col" action="">
            <label htmlFor="email" className="font-semibold mb-1">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" required className="border border-slate-400 rounded p-2 mb-2" />
            <label htmlFor="password" className="font-semibold mb-1">Senha:</label>
            <input type="password" name="password" id="password" placeholder="Senha" required className="border border-slate-400 rounded p-2 mb-2" />
            <label htmlFor="password-r" className="font-semibold mb-1">Repita a senha:</label>
            <input type="password" name="password-r" id="password-r" placeholder="Senha" required className="border border-slate-400 rounded p-2 mb-2" />
            <div className="flex flex-row-reverse items-center flex-wrap justify-between my-4">
              <button type="submit" className="bg-slate-500 font-bold text-slate-200 px-6 py-1 rounded text-lg">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}