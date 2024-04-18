-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");
