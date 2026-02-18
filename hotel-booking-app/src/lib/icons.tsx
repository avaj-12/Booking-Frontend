import { Bed, CarFront, CarTaxiFront, FerrisWheel, Plane } from "lucide-react"

const icons = {
  bed: Bed,
  flight: Plane,
  car: CarFront,
  attraction: FerrisWheel,
  taxi: CarTaxiFront,
}

export type IconName = keyof typeof icons
export default icons
