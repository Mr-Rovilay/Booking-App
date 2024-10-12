import {MdOutlineQuestionAnswer} from "react-icons/md"
import {BiSelectMultiple} from "react-icons/bi"
import {GrCertificate} from "react-icons/gr"
const Features = () => {
  return (
    <section className="py-12 max-padd-container xl:py-32">
      <div className="pb-12 text-center">
        <h6 className="capitalize">Few Steps to your new home</h6>
        <h2 className="capitalize h2">this is how easy it can be</h2>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 bg-white rounded-3xl">
        <MdOutlineQuestionAnswer className="mb-2 bold-32 text-secondary"/>
        <h4 className="h4">Answer Question</h4>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium ex fuga nisi totam dignissimos labore accusantium temporibus rerum tenetur necessitatibus ea, laborum ipsam magni est harum itaque consequuntur earum!</p>
      </div>
      <div className="p-4 bg-white rounded-3xl">
        <BiSelectMultiple className="mb-2 text-yellow-400 bold-32"/>
        <h4 className="h4">Select Property</h4>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium ex fuga nisi totam dignissimos labore accusantium temporibus rerum tenetur necessitatibus ea, laborum ipsam magni est harum itaque consequuntur earum!</p>
      </div>
      <div className="p-4 bg-white rounded-3xl">
        <GrCertificate className="mb-2 text-red-500 bold-32"/>
        <h4 className="h4">Enjoy Property</h4>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium ex fuga nisi totam dignissimos labore accusantium temporibus rerum tenetur necessitatibus ea, laborum ipsam magni est harum itaque consequuntur earum!</p>
      </div>

      </div>
    </section>
  )
}

export default Features