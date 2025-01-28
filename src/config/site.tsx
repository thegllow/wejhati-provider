import React from "react"
import {
  Icon,
  IconChartBar,
  IconFileDescription,
  IconHomeFilled,
  IconMap,
  IconProps,
} from "@tabler/icons-react"
import { BusFront, LucideProps } from "lucide-react"

export type NavItemType = {
  label: string
  icon:
    | React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
  link: string | { label: string; link: string }[]
}
export const providerNavbarItems: NavItemType[] = [
  {
    label: "home",
    link: "/provider",
    icon: IconHomeFilled,
  },
  {
    label: "bus-fleet",
    link: "/provider/bus-fleet",
    icon: BusFront,
  },
  {
    label: "trip-management",
    link: "/provider/trip-management",
    icon: IconMap,
  },
  {
    label: "financial-management",
    link: "/provider/financial",
    icon: IconChartBar,
  },
  {
    label: "reports",
    link: "/provider/reports",
    icon: IconFileDescription,
  },
]
