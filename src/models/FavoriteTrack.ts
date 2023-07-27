import Album from './Album'
import Artist from './Artist'

export default interface FavoriteTrack {
  album: Album
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: object
  external_urls: object
  href: string
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}
