import Dashboard from "./Dashboard";

export default function Home() {

    // const { data: session } = useSession()
    // const router = useRouter()

    // if (!session) {
    //     // User is not logged in, redirect to root page
    //     router.push('/')
    //     return null
    //   }
    
    return (
        <div className="lg:pl-80 lg:pt-2 md:pt-24">
            <Dashboard />
        </div>

    )
}