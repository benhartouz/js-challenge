import {fetchNearEarth} from '../../actions/near-earth'
import AxiosHandler from '../../lib/api'
import {useQuery} from 'react-query'
import NearEarthTemplate from '../../components/templates/near-earth'

const NearEarthView = () => {
  const queryResponse = useQuery('fetch-near-earth', () => {
    return AxiosHandler(fetchNearEarth())
  })

  return <NearEarthTemplate {...queryResponse} />
}

export default NearEarthView
