interface Props {
  time: string;
}

export function Timer(props: Props) {
  return <p className="text-8xl font-semibold">{props.time}</p>;
}
