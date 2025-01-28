import React from "react"
import { Icon, IconHomeFilled, IconProps } from "@tabler/icons-react"
import { LucideProps } from "lucide-react"

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
        label: "home2",
        link: "/provider2",
        icon: IconHomeFilled,
    },
]
