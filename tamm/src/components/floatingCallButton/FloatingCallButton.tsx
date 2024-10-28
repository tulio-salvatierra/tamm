import Phone from "../../assets/phone.svg";
export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="tel:+17739199161"
        className=" flex p-4 bg-mainBlue text-lightGreen text-lg  mb-4    rounded-full shadow-2xl"
      >
        <img src={Phone} className="mr-1" />
        Call now
      </a>
    </div>
  );
}
