import Header from '@/components/header/page'

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
