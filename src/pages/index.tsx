import { NextPage, GetServerSideProps } from 'next'
import { getRandomPerson } from '../api/person'
import styles from '../styles/Home.module.css'
import { PrettyJSON } from '../components/PrettyJSON'

interface Props {
  data: any
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <PrettyJSON data={data} replacer={null} space={2} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getRandomPerson()
  return {
    props: {
      data
    }
  }
}

export default Home
