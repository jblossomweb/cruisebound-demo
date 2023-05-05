import fetchSailings from 'app/services/fetchSailings'
import SailingsPage from 'app/views/SailingsPage'

export const getServerSideProps = async () => {
  const { sailings, error } = await fetchSailings()

  return {
    props: { sailings, error: error as Error | null },
  }
}

export default SailingsPage
