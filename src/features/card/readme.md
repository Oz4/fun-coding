# Card component 

```JSX
interface ICardProps {

    title: string | React.ReactNode
    content: string | React.ReactNode
    image: string // "https://..."
    footerLeftContent: string | React.ReactNode
    footerRightContent: string | React.ReactNode
    borderRadius?: "0.25rem" | "0.5rem" | "1rem" | string
    padding?: "0.25rem" | "0.5rem" | "1rem" | string
    width?: string // "200px"
    minHeight?: string // "300px"
    bgColor?: string // "#121212"
    hoverColor?: string // "#121212"

}

```

Demo: [4ws.app/card](https://www.4ws.app/card)