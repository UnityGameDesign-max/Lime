"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";



export type Ticket = {
  lead_id: string,
  subsource: string,
  idnumber: string,
  firstnames: string,
  surname: string,
  cellular: string,
  email: string,
  historically_disadvantaged: string,
  province: string
}

export const columns: ColumnDef<Ticket>[] = [
  {

    header: 'Lead ID',
    accessorKey: 'lead_id',

    cell: ({ row }) => {

      const lead_id: string = row.getValue('lead_id');
      return <div className="text-sm text-primary font-semibold">{lead_id}</div>
    }
  },
  {
    header: "Sub Source",
    accessorKey: "subsource",
   
  },
  {
    header: "ID number",
    accessorKey: "idnumber",

    // cell: ({ row }) => {
    //   const ticketId : number = row.getValue('ticket_id');

    //   return (
    //     <Sheet>
    //       <SheetTrigger><div 
    //       className="text-muted-foreground cursor-pointer hover:underline text-sky-500"
    //       >{`#${ticketId}`}
    //     </div></SheetTrigger>
    //     <SheetContent>
    //       <SheetHeader className="py-3">
    //         <div className="flex items-center gap-3">
    //           <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-primary/10">
    //             <TicketCheck className="h-4 w-4 text-primary" />
    //           </div>
    //           <SheetTitle>Ticket Preview</SheetTitle>
    //         </div>
            
    //       </SheetHeader>

    //       <div className="flex items-center justify-between gap-2">
    //         <div className="flex items-center gap-2">
    //           <p className="text-sky-500">{`#${ticketId}`}</p>
    //           <p className=" text-muted-foreground">Basic Website Ticket</p>
    //         </div>
           
            
    //       </div>
    //     </SheetContent>
    //     </Sheet>

        
    //   )
    // }
  },
  
  {
    header: "First Name",
    accessorKey: "firstnames",  
    
    // cell: ({ row }) => {
    //   const priority : string = row.getValue('priority');

    //   if(priority === 'HIGH'){
    //     return <PriorityStatus priority={priority} priorityColor="text-red-500 bg-red-500/10 p-1 rounded-full text-center w-[100px]"/>
    //   }
    // }
  },
  {
    header: "Surname",
    accessorKey: 'surname',

    
  },

  {
    header: "Cellular",
    accessorKey: 'cellular',

    
  },

  {
    header: "Email",
    accessorKey: 'email',
    
  },

  {
    header: "Historically disadvantaged",
    accessorKey: 'historically_disadvantaged',

    cell: ({ row }) => {
        const historical : string = row.getValue('historically_disadvantaged');

        if(historical === '0'){
            return <Badge className="text-purple-500" variant='secondary'>White</Badge>
        }else if(historical === '1'){
            return <Badge className="text-green-500" variant='secondary'>Other</Badge>
        }
    }
    
  },

  {
    header: "Province",
    accessorKey: "province"
  }
 
 
 
];