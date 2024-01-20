import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <h2 className='text-center text-3xl  text-blue-500'>
        Página não encontrada
      </h2>
      <p>
        Volte para o{' '}
        <Link href='/' className='underline'>
          Inicio
        </Link>
      </p>
    </main>
  );
}
