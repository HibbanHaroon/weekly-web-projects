interface Props {
  time: string;
}

export function Timer(props: Props) {
  return <div>{props.time}</div>;
}
