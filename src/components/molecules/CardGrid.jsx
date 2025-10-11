export default function CardGrid () {
    return (
        <ul className="w-full max-w-4xl grid grid-cols-2 gap-8 mt-16">
            <li className="w-full bg-white overflow-hidden rounded-xl shadow-md shadow-gray-300 border-4 border-green-500">
                <iframe 
                    width="100%" 
                    height="166" 
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2175586167%3Fsecret_token%3Ds-20blDg4KgLl&color=%232e8b57&auto_play=false&hide_related=false&show_comments=true&show_user=true"
                />
            </li>




            <li className="w-full bg-white p-6 rounded-xl shadow-md shadow-gray-300 h-36"></li>

        </ul>
    )


}