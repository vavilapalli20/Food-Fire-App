const Contact = () => 
{
    return(
        <div>
            <h1 className="font-bold m-2 p-2 text-3xl"> Contact Us Page</h1>

            <form>
                <input type="text" className="border-blue-400 p-2 m-2" placeholder="Name"></input>
                <input type="text" className="border-blue-400 p-2 m-2" placeholder="message"></input>

                <button className="bg-red-700 text-white rounded-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact;