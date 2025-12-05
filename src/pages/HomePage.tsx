

export const HomePage = () => {
    return (
        <main className="sm:ml-14 p-4">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum facilis id voluptatibus rerum commodi, inventore provident neque veritatis magni libero ipsa accusantium sunt voluptas exercitationem recusandae numquam mollitia necessitatibus!</p>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
                The People of the Kingdom
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, obcaecati totam exercitationem eos rerum asperiores placeat illum inventore autem! Id sequi ducimus cupiditate nemo porro officia. Neque nobis fugiat eum?</p>
             <blockquote className="mt-6 border-l-2 pl-6 italic">
                &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
                it&apos;s only fair that they should pay for the privilege.&quot;
            </blockquote>

            <ul className="flex flex-col my-6 ml-6 list-disc [&>li]:mt-2 items-center justify-center">
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
        </main>    
        );
}