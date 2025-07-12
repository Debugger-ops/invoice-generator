"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Play, Pause, Square, Clock } from "lucide-react";

export const TimeTracker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    if (seconds > 0 && taskName) {
      // Here you would save the time entry
      console.log('Time entry saved:', { task: taskName, duration: seconds });
    }
    setSeconds(0);
    setTaskName("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Time Tracker
        </CardTitle>
        <CardDescription>Track billable hours for your projects</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="task-name">Task Description</Label>
          <Input
            id="task-name"
            placeholder="What are you working on?"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-mono font-bold text-blue-600 mb-4">
            {formatTime(seconds)}
          </div>
          
          <div className="flex justify-center gap-2">
            {!isRunning ? (
              <Button 
                onClick={handleStart} 
                disabled={!taskName}
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="h-4 w-4 mr-2" />
                Start
              </Button>
            ) : (
              <Button onClick={handlePause} variant="outline">
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </Button>
            )}
            
            <Button 
              onClick={handleStop} 
              variant="destructive"
              disabled={seconds === 0}
            >
              <Square className="h-4 w-4 mr-2" />
              Stop
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};