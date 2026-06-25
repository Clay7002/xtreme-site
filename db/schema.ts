import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const repairPlanRequests = sqliteTable("repair_plan_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  requestType: text("request_type").notNull(),
  drivableStatus: text("drivable_status").notNull(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  city: text("city").notNull().default(""),
  vehicle: text("vehicle").notNull(),
  vin: text("vin").notNull().default(""),
  mileage: text("mileage").notNull().default(""),
  insuranceCompany: text("insurance_company").notNull().default(""),
  claimNumber: text("claim_number").notNull().default(""),
  damageAreas: text("damage_areas").notNull().default(""),
  notes: text("notes").notNull().default(""),
  photoCount: integer("photo_count").notNull().default(0),
  photoNames: text("photo_names").notNull().default("[]"),
  consent: text("consent").notNull().default("yes"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
