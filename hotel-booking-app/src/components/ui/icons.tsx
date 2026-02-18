import icons from '@/lib/icons';

type Props = {
  icon: keyof typeof icons;
};

export default function Icon({ icon, ...props }: Props) {
  const Component = icons[icon];
  return <Component {...props} />;
}
