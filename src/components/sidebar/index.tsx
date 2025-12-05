import { Sheet, SheetTrigger, SheetContent} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { LayoutDashboard, LogOutIcon, Package, PanelBottom, PersonStanding } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
export function Sidebar() {
    return(
        <div className=" w-full flex  flex-col bg-muted/40">
            <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex'>
                <nav className='flex flex-col items-center gap-4 px-2 py-5'>
                    <TooltipProvider>
                        <Link to={'#'} className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary
                        text-primary-foreground rounded-full'>
                            <Package className='h-4 w-4' />
                            <span className='sr-only'>Dashboard Caborno360</span>     
                        </Link>

                        {/* <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={'/homepage'} className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground'>
                                    <Home className='h-5 w-5' />
                                    <span className='sr-only'>Inicio</span>     
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Inicio
                            </TooltipContent>
                        </Tooltip> */}

                          <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={'/dashboard'} className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground'>
                                    <LayoutDashboard className='h-5 w-5' />
                                    <span className='sr-only'>Dashboard</span>     
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Dashboard
                            </TooltipContent>
                        </Tooltip>

                          {/* <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={'/about'} className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground'>
                                    <ChartNoAxesGantt className='h-5 w-5' />
                                    <span className='sr-only'>About</span>     
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Sobre
                            </TooltipContent>
                        </Tooltip> */}


                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={'/members'} className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground'>
                                    <PersonStanding className='h-5 w-5' />
                                    <span className='sr-only'>Members</span>     
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Membros
                            </TooltipContent>
                        </Tooltip>

                       <nav className='mt-auto flex flex-col items-center gap-4 px-0 py-5'>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link to={'/'} className=' flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-accent-foreground'>
                                        <LogOutIcon className='h-5 w-5 text-red-500' />
                                        <span className='sr-only'>Sair</span>     
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side='right'>
                                    Sair
                                </TooltipContent>
                        </Tooltip>
                       </nav>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="sm:hidden flex flex-col sm:gap-4 sm:pl-14">
                <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                    <Sheet>
                        <SheetTrigger asChild>
   
                            <Button size='icon' variant='outline' className='sm:hidden '>
                                <PanelBottom  className='w-5 h-5'/>
                                <span className='sr-only'>abrir/ Fechar</span>      
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='sm:max-w-x' side='left'>
                            <nav  className='grid gap-6 text-lg font-medium px-10 py-1.5'>
                                <Link to={'/dashboard'}  prefetch={'none'} className='flex h-10 w-10  bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2'>
                                    <Package className='h-5 w-5 transition-all'/>

                                </Link>

                                {/* <Link to={'/homepage'}  prefetch={'none'} 
                                 className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <Home className='h-5 w-5 transition-all'/>
                                    <span>Inicio</span>
                                </Link> */}
                                <Link to={'/dashboard'}  prefetch={'none'} 
                                 className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <LayoutDashboard className='h-5 w-5 transition-all'/>
                                    <span>Dashboard</span>
                                </Link>
                                {/* <Link to={'/about'}  prefetch={'none'} 
                                 className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <ChartNoAxesGantt className='h-5 w-5 transition-all'/>
                                    <span>about</span>
                                </Link> */}
                                <Link to={'/members'}  prefetch={'none'} 
                                 className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <PersonStanding  className='h-5 w-5 transition-all'/>
                                    <span>Members</span>
                                </Link>
                            </nav>
                            <nav className='mt-auto flex flex-col items-center gap-4 px-0 py-5'>
                                <Link to={'/'}  prefetch={'none'} 
                                 className='mt-100 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <LogOutIcon className='h-5 w-5 transition-all text-red-500'/>
                                    <span>Sair</span>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>menu</h2>
                </header>
            </div>
        </div>
    )
}