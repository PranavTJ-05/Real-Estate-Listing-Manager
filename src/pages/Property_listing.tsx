'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, ChevronDown } from "lucide-react";

const listings = [
  {
    title: "Cozy Apartment in Downtown",
    type: "Rent",
    price: "$2,500",
    address: "123 Main St, Anytown",
    status: "Active"
  },
  {
    title: "Spacious Family Home",
    type: "Sale",
    price: "$500,000",
    address: "456 Oak Ave, Anytown",
    status: "Active"
  },
  {
    title: "Luxury Condo with a View",
    type: "Sale",
    price: "$1,200,000",
    address: "789 Pine Ln, Anytown",
    status: "Draft"
  },
  {
    title: "Charming Townhouse",
    type: "Rent",
    price: "$1,800",
    address: "101 Elm Rd, Anytown",
    status: "Active"
  },
  {
    title: "Modern Studio Apartment",
    type: "Rent",
    price: "$1,500",
    address: "222 Maple Dr, Anytown",
    status: "Active"
  }
];

const Property_listing = () => {
  return (
    <div className="px-6 md:px-10 py-8 mt-24 max-w-screen-xl mx-auto text-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Listings</h1>
          <p className="text-sm text-muted-foreground">Manage your property listings</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">New Listing</Button>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 items-center">
        {/* Search with icon */}
        <div className="relative w-full sm:w-1/3">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search listings..."
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Status <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Draft</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Price <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Low to High</DropdownMenuItem>
            <DropdownMenuItem>High to Low</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Date <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Oldest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listings.map((listing, index) => (
                <TableRow key={index}>
                  <TableCell>{listing.title}</TableCell>
                  <TableCell>{listing.type}</TableCell>
                  <TableCell>{listing.price}</TableCell>
                  <TableCell>{listing.address}</TableCell>
                  <TableCell>
                    <Badge variant={listing.status === "Active" ? "default" : "secondary"}>
                      {listing.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Property_listing;
