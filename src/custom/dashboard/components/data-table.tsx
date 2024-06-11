import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { zodResolver } from "@hookform/resolvers/zod";
  
  import React from "react";
  import { Button } from "@/components/ui/button";
 
  
  import {  Check, ChevronsUpDown, Download, Loader, PhoneIncoming, UserRoundPlus } from "lucide-react";
  
  import { cn } from "@/lib/utils";
  import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

  import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LeadDetailValidator, TLeadDetailValidator } from "@/lib/validators/lead-detail-validators";
import { useForm } from "react-hook-form";

  
  
  
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];

 
    loading: boolean,

  }
  
  export function LeadDataTable<TData, TValue>({
    columns,
    data,
    loading,
  }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    );
    
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("");

    const Status = [
      {
        value: "White",
        label: "White",
      },
      {
        value: "Other",
        label: "Other",
      },
      
    ]
   
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
  
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
  
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });


    const form = useForm<TLeadDetailValidator>({
      resolver: zodResolver(LeadDetailValidator),
      defaultValues: {
          subsource: "",
          idnumber: "",
          firstnames: "",
          surname: "",
          cellular: "",
          email: "",
          historically_disadvantaged: "",
          province: ""

          
      },
  });
  
    return (
      <div>
  
        <div className="flex items-center justify-between py-4  mr-auto">
      
         
         <div className="w-[300px]">
            <Input placeholder="Search lead.."  />
         </div>
          
          <div className={"flex gap-2 justify-between"}>
            
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                    >
                    {value
                        ? Status.find((status) => status.value === value)?.label
                        : "Select Historically ..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                    
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                        {Status.map((status) => (
                            <CommandItem
                            key={status.value}
                            value={status.value}
                            onSelect={(currentValue: any) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                            >
                            <Check
                                className={cn(
                                "mr-2 h-4 w-4",
                                value === status.value ? "opacity-100" : "opacity-0"
                                )}
                            />
                            {status.label}
                            </CommandItem>
                        ))}
                        </CommandGroup>
                    </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            
            <div className="flex gap-2">
              <Dialog>
                  <DialogTrigger>
                  <Button>
                      <PhoneIncoming className="w-4 h-4 mr-2" />
                      New Lead
                  </Button>
                  </DialogTrigger>
                  <DialogContent className="px-4">
                      <DialogHeader>
                          <DialogTitle className="flex items-center ">
                              <UserRoundPlus className="w-6 h-6 mr-2"/>
                              Add Lead
                          </DialogTitle>
                          <DialogDescription>
                              Share where you've worked on your profile
                          </DialogDescription>
                      </DialogHeader>

                      <div className="flex-1 overflow-y-auto px-2 py-6">
                            <Form {...form}>
                              <form
                                className="relative space-y-3 overflow-x-hidden"
                              >
                                  <div className="flex justify-center items-center gap-3 py-2">
                                    <div className="w-full space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="subsource"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Subsource</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Subsource.." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                      <div className="w-full space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="idnumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>ID number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter ID number.." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                  </div>

                                  <div className="flex justify-center items-center gap-3 py-1">
                                    <div className="w-full space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="firstnames"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First Name number.." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                      <div className="w-full space-y-1">
                                        <FormField
                                            control={form.control}
                                            name="surname"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Surname</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Surname.." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                  </div>

                                  <div className="flex justify-center items-center gap-3 py-1">
                                    <div className="w-full space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="cellular"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Cellular</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Cellular.." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                      <div className="w-full space-y-1">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Email.." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                  </div>
                                  <div className="flex justify-center items-center gap-3 py-1">
                                    <div className="w-full space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="historically_disadvantaged"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Historically Disadvantaged</FormLabel>
                                                <FormControl>
                                                <Select
                                                          onValueChange={field.onChange}
                                                          defaultValue={field.value}
                                                      >
                                                          <FormControl>
                                                          <SelectTrigger>
                                                              <SelectValue placeholder="Select a Historically " />
                                                          </SelectTrigger>
                                                          </FormControl>
                                                          <SelectContent>
                                                          {[
                                                              "White", 
                                                              'Other', 
                                                              
                                                          ].map((province, index) => {
                                                              return (
                                                              <SelectItem value={province} key={index}>
                                                                  {province}
                                                              </SelectItem>
                                                              );
                                                          })}
                                                          </SelectContent>
                                                      </Select>
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>
                                      <div className="w-full space-y-1">
                                        <FormField
                                            control={form.control}
                                            name="province"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Province</FormLabel>
                                                <FormControl>
                                                      <Select
                                                          onValueChange={field.onChange}
                                                          defaultValue={field.value}
                                                      >
                                                          <FormControl>
                                                          <SelectTrigger>
                                                              <SelectValue placeholder="Select a Province" />
                                                          </SelectTrigger>
                                                          </FormControl>
                                                          <SelectContent>
                                                          {[
                                                              "Gauteng", 
                                                              'Mpumalanga', 
                                                              'North West', 
                                                              'Kwa-Zulu Natal',
                                                              'Limpopo',
                                                              'Northen Cape',
                                                              'Eastern Cape',
                                                              'Free State'
                                                          ].map((province, index) => {
                                                              return (
                                                              <SelectItem value={province} key={index}>
                                                                  {province}
                                                              </SelectItem>
                                                              );
                                                          })}
                                                          </SelectContent>
                                                      </Select>
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                      </div>

            
                                  </div>

                                  <Button>Submit</Button>
                              </form>
                            </Form>
                      </div>

                      
                  </DialogContent>
              </Dialog>

              <Button variant={'secondary'}>
                <Download className="w-4 h-4 mr-2" />
                Export 
              </Button>
            </div>
            

          </div>
         
       
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <Loader size={32} className="text-primary animate-spin" /> 
          </div>
        ) : 
        <div className="rounded-md border">
  
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableHeader>
  
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                   
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell>
                      No results
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        }
        <div className="flex items-center">
  
          <div className="flex items-center justify-start space-x-2 mr-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                table.previousPage();
              }}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                table.nextPage();
              }}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected
          </div>
        </div>
        
      </div>
    );
  }
  
  export default LeadDataTable;