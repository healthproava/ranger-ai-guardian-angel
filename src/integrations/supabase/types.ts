export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accredited_attorney: {
        Row: {
          City: string | null
          "Date Accredited": string | null
          "First Name": string | null
          "Last Name": string | null
          Phone: string | null
          "POA Code": string | null
          "Registration Num": number | null
          State: string | null
          uuid: string
          Zip: string | null
        }
        Insert: {
          City?: string | null
          "Date Accredited"?: string | null
          "First Name"?: string | null
          "Last Name"?: string | null
          Phone?: string | null
          "POA Code"?: string | null
          "Registration Num"?: number | null
          State?: string | null
          uuid?: string
          Zip?: string | null
        }
        Update: {
          City?: string | null
          "Date Accredited"?: string | null
          "First Name"?: string | null
          "Last Name"?: string | null
          Phone?: string | null
          "POA Code"?: string | null
          "Registration Num"?: number | null
          State?: string | null
          uuid?: string
          Zip?: string | null
        }
        Relationships: []
      }
      case_interactions: {
        Row: {
          case_manager_id: string | null
          category: string | null
          created_at: string | null
          id: string
          location: string | null
          notes: string | null
          priority: string | null
          resources_matched: Json | null
          search_query: string | null
          session_id: string | null
          status: string | null
          updated_at: string | null
          veteran_id: string | null
        }
        Insert: {
          case_manager_id?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          notes?: string | null
          priority?: string | null
          resources_matched?: Json | null
          search_query?: string | null
          session_id?: string | null
          status?: string | null
          updated_at?: string | null
          veteran_id?: string | null
        }
        Update: {
          case_manager_id?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          notes?: string | null
          priority?: string | null
          resources_matched?: Json | null
          search_query?: string | null
          session_id?: string | null
          status?: string | null
          updated_at?: string | null
          veteran_id?: string | null
        }
        Relationships: []
      }
      facility_search_cache: {
        Row: {
          created_at: string | null
          id: number
          results: Json | null
          search_query: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          results?: Json | null
          search_query: string
        }
        Update: {
          created_at?: string | null
          id?: number
          results?: Json | null
          search_query?: string
        }
        Relationships: []
      }
      form_schemas: {
        Row: {
          form_name: string
          form_number: string
          id: number
          json_schema: Json
        }
        Insert: {
          form_name: string
          form_number: string
          id?: number
          json_schema: Json
        }
        Update: {
          form_name?: string
          form_number?: string
          id?: number
          json_schema?: Json
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          created_at: string
          form_data: Json | null
          form_number: string
          id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          form_data?: Json | null
          form_number: string
          id?: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          form_data?: Json | null
          form_number?: string
          id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      internal_logs: {
        Row: {
          ai_analysis: string | null
          created_at: string
          event_type: string | null
          id: number
          session_id: string | null
          user_feedback: string | null
        }
        Insert: {
          ai_analysis?: string | null
          created_at?: string
          event_type?: string | null
          id?: number
          session_id?: string | null
          user_feedback?: string | null
        }
        Update: {
          ai_analysis?: string | null
          created_at?: string
          event_type?: string | null
          id?: number
          session_id?: string | null
          user_feedback?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          organization: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          organization?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          address: string | null
          category: string[] | null
          created_at: string
          description: string | null
          download_path: string | null
          eligibility: string | null
          email: string | null
          id: number
          lat: number | null
          lng: number | null
          org_name: string | null
          phone: string | null
          priority_level: number | null
          referral_process: string | null
          tags: string[] | null
          title: string
          type: string
          url: string | null
          verified: boolean | null
          website: string | null
        }
        Insert: {
          address?: string | null
          category?: string[] | null
          created_at?: string
          description?: string | null
          download_path?: string | null
          eligibility?: string | null
          email?: string | null
          id?: number
          lat?: number | null
          lng?: number | null
          org_name?: string | null
          phone?: string | null
          priority_level?: number | null
          referral_process?: string | null
          tags?: string[] | null
          title: string
          type: string
          url?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Update: {
          address?: string | null
          category?: string[] | null
          created_at?: string
          description?: string | null
          download_path?: string | null
          eligibility?: string | null
          email?: string | null
          id?: number
          lat?: number | null
          lng?: number | null
          org_name?: string | null
          phone?: string | null
          priority_level?: number | null
          referral_process?: string | null
          tags?: string[] | null
          title?: string
          type?: string
          url?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Relationships: []
      }
      saved_resources: {
        Row: {
          created_at: string | null
          id: string
          notes: string | null
          resource_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          notes?: string | null
          resource_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          notes?: string | null
          resource_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "saved_resources_resource_id_fkey"
            columns: ["resource_id"]
            isOneToOne: false
            referencedRelation: "resources"
            referencedColumns: ["id"]
          },
        ]
      }
      search_cache: {
        Row: {
          created_at: string | null
          id: number
          results: Json | null
          search_query: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          results?: Json | null
          search_query: string
        }
        Update: {
          created_at?: string | null
          id?: number
          results?: Json | null
          search_query?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "case_manager" | "veteran"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "case_manager", "veteran"],
    },
  },
} as const
