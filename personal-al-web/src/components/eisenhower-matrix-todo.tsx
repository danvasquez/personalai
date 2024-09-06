'use client'

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TodoItem = {
  id: string
  quadrant: string
  task: string
  description: string
}

export function EisenhowerMatrixTodo() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([
    { id: "1", quadrant: "urgent-important", task: "Complete project proposal", description: "Finish and submit the project proposal by EOD" },
    { id: "2", quadrant: "urgent-important", task: "Prepare for client meeting", description: "Review documents and prepare presentation" },
    { id: "3", quadrant: "not-urgent-important", task: "Learn new programming language", description: "Dedicate 1 hour daily to learning Python" },
    { id: "4", quadrant: "not-urgent-important", task: "Plan quarterly goals", description: "Set personal and professional goals for Q3" },
    { id: "5", quadrant: "urgent-not-important", task: "Respond to emails", description: "Clear inbox and respond to pending emails" },
    { id: "6", quadrant: "urgent-not-important", task: "Schedule dentist appointment", description: "Book a check-up for next month" },
    { id: "7", quadrant: "not-urgent-not-important", task: "Organize digital photos", description: "Sort and categorize photos from last vacation" },
    { id: "8", quadrant: "not-urgent-not-important", task: "Clean out garage", description: "Sort through items and organize storage" },
  ])

  const QuadrantCard = ({ title, quadrantId, items, bgColor }) => (
    <Card className={`${bgColor} h-full`}>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 min-h-[200px]">
          {items.map((item) => (
            <li key={item.id} className="bg-white rounded-md p-2 shadow">
              <h3 className="font-semibold">{item.task}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )

  var labelcss="block tracking-wide text-gray-700 text-xs fond-bold mb-2";
  var inputcss="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white";

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Eisenhower Matrix Todo List</h1>
        
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <label className={labelcss}>Todo Description</label>
            <input className={inputcss} type="text" placeholder="a new todo item"/>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <label className={labelcss}>Due Date</label>
            <input className={inputcss} type="datetime-local"/>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <label className={labelcss}>Value</label>
            <input className={inputcss} type="number" placeholder="2"/>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <label className={labelcss}>Effort</label>
            <input className={inputcss} type="number" placeholder="2"/>
          </div>
        </form>

        <div className="grid grid-cols-2 gap-4 h-[calc(100vh-100px)]">
          <QuadrantCard
            title="Urgent & Important"
            quadrantId="urgent-important"
            items={todoItems.filter((item) => item.quadrant === "urgent-important")}
            bgColor="bg-red-100"
          />
          <QuadrantCard
            title="Not Urgent & Important"
            quadrantId="not-urgent-important"
            items={todoItems.filter((item) => item.quadrant === "not-urgent-important")}
            bgColor="bg-blue-100"
          />
          <QuadrantCard
            title="Urgent & Not Important"
            quadrantId="urgent-not-important"
            items={todoItems.filter((item) => item.quadrant === "urgent-not-important")}
            bgColor="bg-yellow-100"
          />
          <QuadrantCard
            title="Not Urgent & Not Important"
            quadrantId="not-urgent-not-important"
            items={todoItems.filter((item) => item.quadrant === "not-urgent-not-important")}
            bgColor="bg-green-100"
          />
        </div>
      </div>
  )
}