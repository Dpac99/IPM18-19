if (sessionStorage.getItem("hotels") === null) {

    sessionStorage.setItem("hotels", JSON.stringify([
        {
            name: "Hotel Ritz",
            stars: 5,
            checkin: "07/05/2019 - 10:00",
            checkout: "12/05/2019 - 12:00",
            address: "Rotunda do Marques",
            contact: "912738126",
            room: 312
        },
        {
            name: "Hotel Roma",
            stars: 4,
            checkin: "13/05/2019 - 08:00",
            checkout: "19/05/2019 - 12:00",
            address: "Avenida de Roma",
            contact: "912738126",
            room: 114
        },
        {
            name: "Hotel Tivoli",
            stars: 3,
            checkin: "29/05/2019 - 07:00",
            checkout: "05/0562019 - 12:00",
            address: "Rua Castilho",
            contact: "912738126",
            room: 420
        }
    ]))

    sessionStorage.setItem("friends", JSON.stringify([
        "Tiago Le",
        "Diogo Pacheco",
        "Andreia Pereira",
        "Pedro Lamego",
        "Joao Silva",
    ]))

    sessionStorage.setItem("flights", JSON.stringify([
        {
            company: "Ryanair",
            itinerary: "LIS-OPO",
            number: "2543",
            seat: "28A",
            date: "11/03/2019",
            time: "06:15",
        },
        {
            company: "Ryanair",
            itinerary: "OPO-LIS",
            number: "2271",
            seat: "24A",
            date: "18/03/2019",
            time: "18:55",
        },
        {
            company: "TAP",
            itinerary: "LIS-PDL",
            number: "1371",
            seat: "2A",
            date: "19/05/2019",
            time: "19:05",
        },
        {
            company: "TAP",
            itinerary: "PDL-LIS",
            number: "1149",
            seat: "5F",
            date: "22/06/2019",
            time: "10:25",
        }
    ]))

    sessionStorage.setItem("plans", JSON.stringify([
        {
            date: "05/03/2019",
            plans: [
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                },
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                }
            ]
        },
        {
            date: "06/03/2019",
            plans: [
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                }
            ]
        },
        {
            date: "07/03/2019",
            plans: [
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                }
            ]
        }
    ]))
    sessionStorage.setItem("currentPlan", "")
    sessionStorage.setItem("currentPlanIndex", "0")
    sessionStorage.setItem("bpm", [81,76,84,80, 86, 82] )
    sessionStorage.setItem("BPMCounter", 5)
    sessionStorage.setItem("o2", [95, 95, 93, 91, 93, 92])
    sessionStorage.setItem("O2Counter", 5)
    sessionStorage.setItem("km", JSON.stringify({
        dayTotal: 2.6,
        values: [0.2, 0.4, 0.1, 0.3, 0.4, 1.2]
    }))
    sessionStorage.setItem("top-bpm", 135)
    sessionStorage.setItem("low-bpm", 75)
    sessionStorage.setItem("bpmGauge", 20)
    sessionStorage.setItem("o2Gauge", 10)
    sessionStorage.setItem("kmGauge", 15)
    sessionStorage.setItem("profiles", JSON.stringify([
        {
            name: "Walking",
            top_bpm: 135,
            low_bpm: 75,
            current: true
        },
        {
            name: "Running",
            top_bpm: 170,
            low_bpm:100,
            current: false
        },
        {
            name: "Resting",
            top_bpm: 110,
            low_bpm: 60,
            current: false
        },
        {
            name:"Sleeping",
            top_bpm:80,
            low_bpm:40,
            current: false
        }
    ]))

    sessionStorage.setItem("name", "Mr. Eduardo Morgado")
    sessionStorage.setItem("bloodType", "A+")
    sessionStorage.setItem("healthProblems", ["Asthma"])
    sessionStorage.setItem("medicines", [])
    sessionStorage.setItem("emergencyContacts", JSON.stringify([{
        name: "Mom",
        contact: "+351 917986622"
    }]))
    sessionStorage.setItem("birthday", "02/10/1998")
    sessionStorage.setItem("medicalBack", "/healthScreen.html")

    sessionStorage.setItem("notifs", JSON.stringify([{
        img: "Assets/images/sun.png",
        text: "Its a sunny day today!",
        id:0,
        href:"protFuncional1-beta.html"
    }]))
}

sessionStorage.setItem("friendsOn", "false")