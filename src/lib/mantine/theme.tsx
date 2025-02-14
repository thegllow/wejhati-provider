import {
  Badge,
  Button,
  createTheme,
  Input,
  Menu,
  Radio,
  RadioGroup,
  rem,
  SegmentedControl,
  Select,
  Table,
  TableTd,
  TableTh,
  TableThead,
  TextInput,
} from "@mantine/core"
import { Calendar } from "@mantine/dates"
import { IconTriangleInvertedFilled } from "@tabler/icons-react"

const primary = [
  "#fff7e1",
  "#ffedcd",
  "#fdd99d",
  "#fbc469",
  "#f9b33d",
  "#f8a821",
  "#f8a210",
  "#dd8d02",
  "#c57d00",
  "#ab6b00",
] as const
const secondary = [
  "#f3f7ef",
  "#e7ebe4",
  "#cdd4c8",
  "#b2bda9",
  "#9ba98f",
  "#8c9c7e",
  "#849675",
  "#718262",
  "#637456",
  "#536446",
] as const
const gray = [
  "#f5f5f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#e7e7e7",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#575757",
] as const

const text = [
  "#faf4ec",
  "#eae7e3",
  "#d0cecb",
  "#b5b3af",
  "#9e9c97",
  "#908d88",
  "#8a867f",
  "#77736b",
  "#6b665d",
  "#5e574b",
] as const

export const theme = createTheme({
  black: "#2B261E",

  colors: {
    primary,
    secondary,
    gray,
    text,
  },

  fontFamily: "Inter, serf",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  primaryColor: "primary",
  radius: {
    sm: "0.35rem",
    md: "0.55rem",
    lg: "1rem",
    xl: "2rem",
  },

  components: {
    Table: Table.extend({
      defaultProps: {
        color: "primary",
        highlightOnHover: true,
        verticalSpacing: "md",
        borderColor: "#EAECF0",
      },
    }),
    TableThead: TableThead.extend({
      defaultProps: {
        bg: "#FFF9F0",
      },
    }),
    TableTh: TableTh.extend({
      defaultProps: {
        fw: 600,
      },
    }),
    TableTd: TableTd.extend({
      defaultProps: {
        c: "#747474",
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        size: "lg",
        radius: "xl",
        fw: 600,
        variant: "light",
        style: {
          textTransform: "capitalize",
        },
      },
    }),
    Menu: Menu.extend({
      defaultProps: {
        shadow: "lg",
      },
    }),
    Input: Input.extend({
      defaultProps: {
        size: "md",
        fw: 500,
        c: "primary",
        classNames: {
          input: '[type="tel"]:!text-left',
        },
      },
    }),

    Select: Select.extend({
      defaultProps: {
        size: "md",
        fw: 500,
        rightSection: <IconTriangleInvertedFilled size={12} />,
        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
    }),

    Button: Button.extend({
      defaultProps: {
        fw: 500,
        size: "md",
      },
    }),
    Calendar: Calendar.extend({
      defaultProps: {
        classNames() {
          return {
            day: `!rounded-full data-[selected='true']:!bg-secondary`,
          }
        },
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        radius: "sm",
        style(_theme) {
          return {
            border: "1px solid #C1C1C1",
            background: "#E2E2E2",
            padding: 0,
          }
        },
      },
    }),
    RadioGroup: RadioGroup.extend({
      defaultProps: {
        labelProps: {
          fw: 500,
        },
      },
    }),
    Radio: Radio.extend({
      defaultProps: {
        fw: 600,
        c: "#817C74",
      },
    }),
  },

  defaultRadius: "md",
  fontSizes: {
    xs: rem(11),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(28),
  },
  headings: {
    fontWeight: "600",
    sizes: {
      h1: {
        fontSize: rem(36),
      },
      h2: {
        fontSize: rem(30),
      },
    },
  },
})
