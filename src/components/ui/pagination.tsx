import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-white/10 backdrop-blur-sm"
      >
        Previous
      </Button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? "bg-primary" : "bg-white/10 backdrop-blur-sm"}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-white/10 backdrop-blur-sm"
      >
        Next
      </Button>
    </div>
  );
}