interface CardProps {
  children: JSX.Element
}

interface CardBehaviorProps extends CardProps {}
interface CardTemplateProps extends CardProps {}

export type { CardBehaviorProps, CardTemplateProps };
