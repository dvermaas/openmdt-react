import {AppSidebar} from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ChargeCard} from "@/app/legislation/components/ChargeCard.tsx";

export default function Page() {
    const cardData = [
        {
            "Category": "Offenses Against Persons",
            "Severity": "Capital",
            "Charge": "Murder of a Government Employee",
            "Description": "The intentional killing of a government employee while they are performing their official duties.",
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Capital",
            "Charge": "Serial Assaults and Killings",
            "Description": "A series of intentional assaults and murders committed by the same individual or group.",
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Capital",
            "Charge": "1st Degree Murder",
            "Description": "The premeditated and intentional killing of another person.",
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Capital",
            "Charge": "1st Degree Targeted Violence",
            "Description": "Premeditated violence directed at a specific individual or group with intent to cause harm or death.",
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Assault with a Deadly Weapon",
            "Description": "An attack on another person using a weapon capable of causing serious bodily harm or death.",
            "Time": 21,
            "Fine": 960,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Attempted 2nd Degree Murder",
            "Description": "An unsuccessful attempt to kill another person without premeditation.",
            "Time": 25,
            "Fine": 1130,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Manslaughter",
            "Description": "The unintentional killing of another person, often due to recklessness or negligence.",
            "Time": 150,
            "Fine": 6750,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Kidnapping",
            "Description": "The unlawful abduction and confinement of a person against their will.",
            "Time": 60,
            "Fine": 2500,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Reckless Endangerment",
            "Description": "Engaging in behavior that creates a substantial risk of serious physical injury to another person.",
            "Time": 11,
            "Fine": 500,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "2nd Degree Murder",
            "Description": "The intentional killing of another person without premeditation.",
            "Time": 300,
            "Fine": 18000,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Act of Torture",
            "Description": "The intentional infliction of severe physical or mental pain on another person.",
            "Time": 100,
            "Fine": 5000,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Gang Related Shooting",
            "Description": "A shooting incident involving members of a gang, often related to gang activities.",
            "Time": 100,
            "Fine": 4000,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "2nd Degree Targeted Violence",
            "Description": "Violence directed at a specific individual or group without premeditation.",
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Kidnapping of a Government Employee",
            "Description": "The unlawful abduction and confinement of a government employee.",
            "Time": 100,
            "Fine": 4500,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Robbery of a Law Enforcement Officer",
            "Description": "The act of stealing from a law enforcement officer, often involving force or intimidation.",
            "Time": 1440,
            "Fine": 10000,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Unlawful Imprisonment",
            "Description": "The illegal confinement of a person without their consent.",
            "Time": 11,
            "Fine": 500,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Attempted Murder of a Government Employee",
            "Description": "An unsuccessful attempt to kill a government employee while they are performing their official duties.",
            "Time": 45,
            "Fine": 2200,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Felony",
            "Charge": "Attempted 1st Degree Murder",
            "Description": "An unsuccessful attempt to commit premeditated murder.",
            "Time": 35,
            "Fine": 2100,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Misdemeanor",
            "Charge": "Criminal Threats",
            "Description": "Threatening to harm another person, causing them to fear for their safety.",
            "Time": 14,
            "Fine": 530,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Misdemeanor",
            "Charge": "Brandishing of a Firearm",
            "Description": "The act of displaying a firearm in a threatening manner.",
            "Time": 7,
            "Fine": 270,
            "Points": 0
        },
        {
            "Category": "Offenses Against Persons",
            "Severity": "Misdemeanor",
            "Charge": "Assault and Battery",
            "Description": "The intentional act of causing physical harm to another person.",
            "Time": 11,
            "Fine": 420,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Possession of Contraband in the First Degree",
            "Description": "Possession of illegal items or goods that are prohibited by law.",
            "Time": 14,
            "Fine": 530,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "First Degree Robbery",
            "Description": "The act of stealing property from another person using force or intimidation.",
            "Time": 30,
            "Fine": 1350,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Possession of Dirty Money in the First Degree",
            "Description": "Possession of money obtained through illegal activities.",
            "Time": 21,
            "Fine": 800,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Theft of a Commercial Aircraft",
            "Description": "The unlawful taking of a commercial aircraft without the owner's consent.",
            "Time": 23,
            "Fine": 870,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Theft of an Aircraft",
            "Description": "The unlawful taking of any aircraft without the owner's consent.",
            "Time": 19,
            "Fine": 720,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Robbery of a Financial Institution",
            "Description": "The act of stealing from a bank or other financial institution, often involving force or intimidation.",
            "Time": 100,
            "Fine": 10000,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Aggravated Petty Robbery",
            "Description": "A robbery involving minor theft but with aggravating factors such as the use of a weapon.",
            "Time": 36,
            "Fine": 1400,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Robbery",
            "Description": "The act of stealing property from another person using force or intimidation.",
            "Time": 25,
            "Fine": 1130,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Possession of Stolen Goods",
            "Description": "Possession of items that have been obtained through theft.",
            "Time": 15,
            "Fine": 1000,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Robbery of a Security Firm",
            "Description": "The act of stealing from a security firm, often involving force or intimidation.",
            "Time": 60,
            "Fine": 6000,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Possession of Security Firm Cash",
            "Description": "Possession of money that belongs to a security firm, obtained through illegal means.",
            "Time": 30,
            "Fine": 3000,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Grand Theft",
            "Description": "The theft of property of significant value.",
            "Time": 5,
            "Fine": 500,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Felony",
            "Charge": "Grand Theft Auto",
            "Description": "The theft of a motor vehicle.",
            "Time": 14,
            "Fine": 630,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Petty Theft",
            "Description": "The theft of property of relatively low value.",
            "Time": 0,
            "Fine": 260,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Joyriding",
            "Description": "The unauthorized use of a vehicle, typically for a short period of time.",
            "Time": 7,
            "Fine": 240,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Tampering with a Vehicle",
            "Description": "The unauthorized interference with a vehicle, often with the intent to steal or damage it.",
            "Time": 7,
            "Fine": 240,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Possession of Contraband in the Third Degree",
            "Description": "Possession of illegal items or goods that are prohibited by law, of a lesser degree.",
            "Time": 7,
            "Fine": 240,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Possession of Contraband in the Second Degree",
            "Description": "Possession of illegal items or goods that are prohibited by law, of a moderate degree.",
            "Time": 12,
            "Fine": 400,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Possession of a Stolen Identification",
            "Description": "Possession of an identification document that has been stolen.",
            "Time": 12,
            "Fine": 400,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Possession of Dirty Money in the Second Degree",
            "Description": "Possession of money obtained through illegal activities, of a moderate degree.",
            "Time": 12,
            "Fine": 400,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Leaving Without Paying",
            "Description": "The act of leaving a place of business without paying for goods or services received.",
            "Time": 12,
            "Fine": 400,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Sale of Stolen Goods or Stolen Property",
            "Description": "The act of selling items that have been obtained through theft.",
            "Time": 22,
            "Fine": 730,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Theft",
            "Severity": "Misdemeanor",
            "Charge": "Petty Robbery",
            "Description": "The act of stealing property of relatively low value using force or intimidation.",
            "Time": 24,
            "Fine": 1150,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Capital",
            "Charge": "Witness Tampering",
            "Description": "The act of attempting to influence or prevent a witness from testifying in a legal proceeding.",
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Money Laundering",
            "Description": "The process of making illegally-gained proceeds appear legal.",
            "Time": 30,
            "Fine": 1130,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Extortion",
            "Description": "The act of obtaining something, especially money, through force or threats.",
            "Time": 14,
            "Fine": 630,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Possession of a Tampered Firearm",
            "Description": "Possession of a firearm that has been illegally modified or altered.",
            "Time": 50,
            "Fine": 15000,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Voter Fraud",
            "Description": "The act of interfering with the outcome of an election through illegal means.",
            "Time": 100,
            "Fine": 40000,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Impersonating a Government Employee",
            "Description": "The act of pretending to be a government employee to deceive others.",
            "Time": 21,
            "Fine": 790,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Fraud",
            "Description": "The act of deceiving someone for personal or financial gain.",
            "Time": 14,
            "Fine": 530,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Impersonating a Clergyman",
            "Description": "The act of pretending to be a member of the clergy to deceive others.",
            "Time": 35,
            "Fine": 500,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Impersonation",
            "Description": "The act of pretending to be someone else to deceive others.",
            "Time": 14,
            "Fine": 530,
            "Points": 0
        },
        {
            "Category": "Offenses Involving Fraud",
            "Severity": "Felony",
            "Charge": "Vehicle Registration Fraud",
            "Description": "The act of providing false information to register a vehicle.",
            "Time": 21,
            "Fine": 0,
            "Points": 0
        }];

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1"/>
                            <Separator orientation="vertical" className="mr-2 h-4"/>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Legislation
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                            {cardData.map((card, index) => (
                                <ChargeCard
                                    key={index} // Always use a unique key when rendering lists in React
                                    title={card.Charge}
                                    description={card.Description}
                                />
                            ))}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
