"use client";
import { Button } from "@/components/ui/button"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export function Appbar(){
    return (
            <div className='flex justify-between items-center p-5'>
                <Button variant="outline" className="text-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                    DePin Uptime
                </Button>
                <div>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline" className="mr-2 text-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignUpButton >
                            {/* <Button variant="outline">Sign Up</Button> */}
                            <Button variant="outline" className="text-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
    )
}