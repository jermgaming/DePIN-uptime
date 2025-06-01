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
                <div className="border border-white-200 bg-white rounded-lg  p-2 text-black font-medium">
                    DePin Uptime
                </div>
                <div>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline" className="bg-black text-white font-">Log in</Button>
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