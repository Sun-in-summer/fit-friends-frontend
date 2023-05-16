
type AvatarProps = {
  avatar: string;
}

function Avatar({avatar}: AvatarProps): JSX.Element {
  return (
    <img srcSet ={avatar} alt = "avatar of user" />
  );
}

export default Avatar;
