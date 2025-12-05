import Members from "@/components/members";


export const MemberPage = () => {
   return (
        <main className="sm:ml-14 p-4 sm:flex-col ">
            <p className="text-center mb-4 text-5xl font-bold">Nossos Membros</p>
            <Members />
        </main>
    );
}