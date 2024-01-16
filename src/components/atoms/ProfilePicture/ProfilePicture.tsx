// @ts-ignore
import pp from '../../../static/assets/pp.jpg';

function ProfilePicture({width, height}: {width: number, height: number}) {
    return (
        <img className="profile-pic" width={width} height={height} src={pp} alt="profile" />
    );
}

export default ProfilePicture;
