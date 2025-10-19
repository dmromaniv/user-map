import { Popup } from "react-leaflet";
import type { User } from "../../../types/user";

interface UserDetailsPopupProps {
  userData?: User;
}

const UserDetailsPopup = ({ userData }: UserDetailsPopupProps) => {
  return (
    <Popup>
      <strong>{userData?.name}</strong>
      {userData && userData.interests.length > 0 && (
        <div className="mt-4 ">
          <p className="mb-1 italic">User interests:</p>
          <ul className="text-medium uppercase flex flex-col gap-1">
            {userData.interests?.map((interest, index) => (
              <li key={`${interest}-${index}`}>{interest}</li>
            ))}
          </ul>
        </div>
      )}
    </Popup>
  );
};

export default UserDetailsPopup;
