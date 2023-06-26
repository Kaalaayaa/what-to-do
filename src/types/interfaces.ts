// Define interface for the Event object
export interface Event {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    description: string;
    location: string;
    categories: Category[];
    image: string;
    organizers: string;
    isFree: boolean;
    price: number;
    link: string;
  }
  
  // Define interface for the Organizer object
  export interface Category {
    id: string;
    name: string;
  }
  
  // Define interface for the EventCard component props
  export interface EventCardProps {
    event: Event;
  }
  
  // Define interface for the EventList component props
  export interface EventListProps {
    events: Event[];
  }
  
  // Define interface for the FilterOptions component props
  export interface FilterOptionsProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    startDate: Date;
    onStartDateChange: (date: Date) => void;
    endDate: Date;
    onEndDateChange: (date: Date) => void;
  }
  
  // Define type for the API response
  export type ApiResponse<T> = {
    data: T;
  };
  
  // Define type for the API error response
  export type ApiErrorResponse = {
    error: string;
  };