type Position = [int, int]

interface Places {
  data: DataEntity[] | null;
}
interface DataEntity {
  inlatt: string;
  distance: string;
  timezone: string;
  elevation: string;
  region: Region;
  name: string;
  state: string;
  latt: string;
  longt: string;
  city: string;
  prov: string;
  inlongt: string;
  altgeocode: string;
}
interface Region {
}
