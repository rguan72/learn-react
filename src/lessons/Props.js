import { getImageUrl } from "util"

function NewAvatar({ person, size = 100 }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default function Profile(props) {
    return (
        <div>
            <NewAvatar
                {...props}
            />
            <NewAvatar
                {...props}
            />
           <NewAvatar
                {...props}
            />
        </div>
    )
}