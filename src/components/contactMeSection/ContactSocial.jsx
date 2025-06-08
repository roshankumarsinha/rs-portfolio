import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/roshan-sinha-108510194/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/roshankumarsinha" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/roshan.ku.sinha/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;